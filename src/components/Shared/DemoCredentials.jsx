const DemoCredentials = ({ setDemoCredentials }) => {
  const demoCredentials = [
    { email: 'test08@gmail.com', password: '11111111' },
    // { email: 'test02@gmail.com', password: '22222222' },
  ]

  return (
    <div className="flex flex-col items-center space-y-2">
      {demoCredentials.map((credential, index) => (
        <section
          key={index}
          className="flex w-full max-w-xs items-center justify-between rounded-md bg-gray-100 py-1"
        >
          <div className="flex flex-col items-start space-y-1 px-3 py-1">
            <p className="text-xs font-medium tracking-wide">
              Email: <span className="text-slate-600">{credential.email}</span>
            </p>
            <p className="text-xs font-medium tracking-wide">
              Password:{' '}
              <span className="text-slate-600">{credential.password}</span>
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setDemoCredentials(credential)}
              className="mr-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-gray-300"
            >
              Use
            </button>
          </div>
        </section>
      ))}
    </div>
  )
}
export default DemoCredentials
