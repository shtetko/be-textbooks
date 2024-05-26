const GradeBtn = () => {
  return (
    <div className="card bg-base-100 shadow-md my-3">
      <div className="card-body">
        <div className="flex flex-row items-center">
          <div className="avatar placeholder">
            <div className="bg-neutral-200 text-neutral-content rounded-full w-16">
              <span className="text-black text-xl">1</span>
            </div>
          </div> 
          <div className="ms-3 text-2xl font-bold">KG</div>
          <div className="ms-auto">
            ⟩
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradeBtn