const DemoCredentials = ({ setDemoCredentials }) => {
  const demoCredentials = [
    // { email: 'hasan@juicer.com', password: 'Hasan@juicer00' },
    { email: 'john@juicer.com', password: 'John@juicer01' },
    // { email: 'alice@juicer.com', password: 'Alice@juicer02' },
    // { email: 'bob@juicer.com', password: 'Bob@juicer03' },
    // { email: 'eve@juicer.com', password: 'Eve@juicer04' },
    // { email: 'mike@juicer.com', password: 'Mike@juicer05' },
  ]

  return (
    <div className="flex flex-col items-center space-y-2">
      {demoCredentials.map((credential, index) => (
        <section
          key={index}
          className="flex w-full max-w-xs items-center justify-between rounded-md bg-gray-100 py-1 dark:bg-gray-700"
        >
          <div className="flex flex-col items-start space-y-1 px-3 py-1">
            <p className="text-xs font-medium tracking-wide dark:text-gray-300">
              Email: <span className="text-slate-600 dark:text-gray-400">{credential.email}</span>
            </p>
            <p className="text-xs font-medium tracking-wide dark:text-gray-300">
              Password:{' '}
              <span className="text-slate-600 dark:text-gray-400">{credential.password}</span>
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setDemoCredentials(credential)}
              className="mr-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900"
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
