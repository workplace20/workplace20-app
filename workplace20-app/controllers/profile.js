import skillList from '_data/skill.json'
import challengeList from '_data/challenges.json'
import debug from 'debug'

const log = debug('profile controller')

export class Profile {
    constructor(collection, email) {
        this.collection = collection
        this.email = email
    }

    debugInfo() {
        if (this.collection) {
            return "Look good!"
        } else
            return "Not found collection"
    }

    async update(data) {

        const updater = {};
        const errors = [];

        let profile = await this._getProfile()

        if (!profile.kind) {
            if (data.kind && ['business', 'creator'].indexOf(data.kind) >= 0) {
                updater.$set = {
                    kind: data.kind
                }
            } else {
                errors.push({
                    kind: "required in range [business,creator]"
                })
            }
        }

        if (!updater.$set) {
            updater.$set = {}
        }

        if (data.name) {
            updater.$set.name = data.name
        }
        if (data.birthday) {
            updater.$set.birthday = data.birthdate
        }

        if (data.phone) {
            updater.$set.phone = data.phone
        }
        if (data.yearOfExperience) {
            updater.$set.yearOfExperience = data.yearOfExperience
        }
        if (data.location) {
            updater.$set.location = data.location
        }
        if (data.about) {
            updater.$set.about = data.about
        }

        if (errors.length > 0) {
            [null, error]
        }

        await profileCollection.updateOne({
                email: session.user.email
            },
            updater, {
                upsert: false
            })

		profile = await this._getProfile()

		return [profile,null]
    }

    async _getProfile() {
        if (this.profile) {
            return this.profile
        }

        this.profile = await this.collection.findOne({
            email: this.email
        })

        return this.profile
    }

    async Get() {
        return await this._getProfile()
    }


    async setSkill(challengeId, level) {

        const profile = await this._getProfile()
        if (!profile) {
            return [null, 'Profile not found']
        }


        if (challengeId == 'general') {
            await this.collection.updateOne({
                email: this.email
            }, {
                $set: {
                    generalChallengeCompleted: true
                }
            })
            return
        }

        let profileSkill = profile.skillMatrix[challengeId]

        let newSkill = {}

        newSkill[challengeId] = {
            level: level
        }

        await this.collection.updateOne({
            email: this.email
        }, {
            $set: {
                skillMatrix: Object.assign(profile.skillMatrix, newSkill)
            }
        })

    }

    async getNextLevelOf(challengeId) {

        const profile = await this._getProfile()
        if (!profile) {
            return [null, 'Profile not found']
        }


        let levelOfChallenge = profile.skillMatrix[challengeId]

        if (!levelOfChallenge || !levelOfChallenge.level) {

            log(`Profile ${this.email} start with default level Basic`)

            levelOfChallenge = {
                level: 'Beginner'
            }
        }

        const nextLevel = nextLevelOfChallenge(challengeId, levelOfChallenge.level);

        if (!nextLevel) {
            return [null, 'Challenge is not supported']
        }

        if (nextLevel == levelOfChallenge.level && nextLevel != 'Beginner') {
            // User reached all level
            return [null, 'User is reached max level']
        }

        log(`Current level of profile for skill ${challengeId} is ${levelOfChallenge.level}`)
        log(`next level for skill ${challengeId} is ${nextLevel}`)

        const challenge = challengeList
            .find(el =>
                el.challengeId == challengeId &&
                el.level == nextLevel)

        if (!challenge) {
            return [null, 'Challenge is not support']
        }
        return [challenge, null]
    }

}

function nextLevelOfChallenge(challengeCode, currentLevel) {

    const skill = skillList.skills
        .find(el => el.code == challengeCode);

    if (!skill) {
        return "";
    }

    const indexCurrentLevel = skill.levels.indexOf(currentLevel)

    if (indexCurrentLevel < 0) {
        return skill.levels[0]
    }

    if (indexCurrentLevel == skill.levels.length - 1) {
        return currentLevel;
    }

    return skill.levels[indexCurrentLevel + 1]

}
