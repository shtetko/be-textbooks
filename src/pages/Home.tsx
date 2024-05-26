import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import Container from '../components/Container';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <div className="flex items-center justify-center my-3 h-40">
        <span className="text-3xl font-bold">TextBooks</span>
      </div>
      <div className="collapse collapse-arrow bg-base-100 mb-3">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-medium">
          အခြေခံပညာ မူလတန်း
        </div>
        <div className="collapse-content"> 
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 1</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 2</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 3</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 4</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 5</div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 mb-3">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-medium">
          အခြေခံပညာ အလယ်တန်း
        </div>
        <div className="collapse-content"> 
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200" onClick={() => navigate('/books')}>
            <FaBook/>
            <div className="ms-4">Grade 6</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 7</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 8</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 9</div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 mb-3">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-medium">
          အခြေခံပညာ အထက်တန်း
        </div>
        <div className="collapse-content"> 
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 10</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 11</div>
          </div>
          <div className="flex flex-row items-center p-3 border-b-4 border-base-200">
            <FaBook/>
            <div className="ms-4">Grade 12</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home