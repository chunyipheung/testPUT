export default function LoginForm({children, ...props}) {

  return (
    <>
      <form className="space-y-6" {...props}>
        {children}
      </form>
    </>
  );
}

