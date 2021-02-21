import debug from 'debug'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { signIn } from 'next-auth/client';
import dbHelper from 'lib/database'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      type: 'oauth',
      version: '2.0',
      scope: 'r_liteprofile r_emailaddress',
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET
      },
      accessTokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
      authorizationUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
      profileUrl: 'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))',
      profile: (profile) => {
        var result = {
          id: profile.id,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: profile.emailaddress,
          image: profile.picture
        }

        if (profile.profilePicture && profile.profilePicture['displayImage~']) {
          const { elements } = profile.profilePicture['displayImage~'];

          if (elements && elements.length > 0) {
            result.image = elements.find(x => x.artifact.endsWith('400_400)'))?.identifiers[0]?.identifier;
          }
        }

        return result;
      },
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    },
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw', 

    // Set to true to use encryption (default: false)
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks 
  callbacks: {
    signIn: async (user, account, profile) => {
      const logger = debug('signIn');
      if (account.provider == 'linkedin') {
        const res = await fetch('https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))', {
          headers: [
            ['Authorization', `Bearer ${account.accessToken}`]
          ]
        });

        const json = await res.json();

        const { elements } = json;

        if (elements && elements.length > 0) {
          var emailElement = elements.find(x => x.type === 'EMAIL');
          if (emailElement) {
            user.email = emailElement['handle~']?.emailAddress;
          }
        }
      }

      logger('create email profile if not exist')

      const db = await dbHelper.getDb()
      const profileCollection = await db.collection('profiles')
      const emailProfile = await profileCollection.findOne({ email: user.email })

      if (!emailProfile) {
        logger(`profile for ${user.email} not found. creating...`)
        await profileCollection.insertOne({
          authKind: account.provider,
          status: 'new',
          kind: '',
          email: user.email,
          name: user.name,
          requirements: [],
          skillMatrix: {}
        });

        logger('created')
      } else {
        logger('profile existed. Ignore')
      }

      return Promise.resolve(true);
    },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
    // session: async (session, user) => { 
    //   return Promise.resolve(session) 
    // },
    // jwt: async (token, user, account, profile, isNewUser) => { 
    //   return Promise.resolve(token) 
    // }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
}

export default (req, res) => NextAuth(req, res, options)
