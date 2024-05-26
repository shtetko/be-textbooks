import { FaBook, FaChevronLeft, FaArrowRight } from "react-icons/fa6";
import Container from '../components/Container';


const BookSection = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-xl" onClick={ () => window.history.back() }>
            <FaChevronLeft/>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div>
      <Container>
        <div className="text-sm breadcrumbs mb-3">
          <ul>
            <li><a>Grade 6</a></li> 
            <li><a>Books</a></li> 
          </ul>
        </div>
        <div className="collapse collapse-arrow bg-base-100 mb-3">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium">
            Myanmar
          </div>
          <div className="collapse-content"> 
            <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
              <FaBook/>
              <div className="ms-4">Student Books</div>
            </div>
            <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
              <FaBook/>
              <div className="ms-4">Teacher Guide</div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 mb-3">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium">
            English 
          </div>
          <div className="collapse-content"> 
            <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
              <FaBook/>
              <div className="ms-4">Student Books</div>
            </div>
            <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
              <FaBook/>
              <div className="ms-4">Teacher Guide</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BookSection;