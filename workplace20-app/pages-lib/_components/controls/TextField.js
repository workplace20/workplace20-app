const TextField = ({ label, value = 'N/A', children }) => label ? (
  <>
    <Label>
      { label }
      </Label>
    <Content>
      { value }
    </Content>
  </>
) : (
    <>{ children }</>
  )


const Label = ({ children }) => (
  <dt className="text-sm font-medium text-gray-500">
    {children}
  </dt>
)

const Content = ({ children }) => (
  <dd className="mt-1 text-sm text-gray-900">
    <div className="prose max-w-none">
      {children}
    </div>
  </dd>
)

TextField.Label = Label;
TextField.Content = Content;

export default TextField;
