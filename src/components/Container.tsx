const Container = (props: any) => {
  return (
    <div className="container p-4 bg-base-200 h-screen">
      { props.children }
    </div>
  )
}

export default Container;