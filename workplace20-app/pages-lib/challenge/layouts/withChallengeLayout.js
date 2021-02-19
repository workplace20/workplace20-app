const ChallengeLayout = ({ children }) => {
  return (
    <div className="max-w-3xl lg:max-w-7xl sm:px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

const withChallengeLayout = (Component) => ({ ...props }) => {
  return (
    <ChallengeLayout>
      <Component {...props} />
    </ChallengeLayout>
  );
}

export default withChallengeLayout;