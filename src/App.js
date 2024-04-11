  import love from './assets/love.jpg'
  import './App.css';
  import {useState} from 'react';

  function App() {
    const [toggle, setToggle] = useState(false);
    const handleToggle=()=> {
        setToggle(!toggle);
    }
    return (
      <div className="">
        <h1 className="font-serif text-5xl flex justify-center m-4 text-red-500">11-10-2023❤️11-4-2024</h1>
        {/* image */}
          <div className="  flex justify-center">
            <img 
            src={love} alt="love"
            className="w-[30%] h-[40%] border-4 border-pink-500 rounded-md  border-double"
            />
          </div>

          {/* button */}
          <div className="flex justify-center mt-3">
          { !toggle &&
          <button className="bg-red-500 rounded-md p-2 my-8" onClick={handleToggle}>
            Click me🐄
          </button>
          }
          {toggle && 
          <div>
            <h1 className="flex justify-center my-7">👇</h1>
            <p className="flex justify-center border-solid border-2 border-black bg-[#fc3dfc] text-[#F8F8FF] text-3xl rounded-lg p-2 mx-[20%] break-words font-mono">Hi em anh tên là Sang cũng là ck iu của em ây nek. Anh thấy ngta có bồ học it làm này cx thấy hay sợ em thua ngta nên anh làm nek hí. Kỉ niệm 6 tháng anh chúc em lun học giỏi hạnh phúc và cười nhiều hơn nhen moahhh. Chúc em càng ngày càng yêu anh hơn nhen. Anh iu lắm lun áaaaaaaa &lt;3</p>
          </div>
          }
          </div>
      </div>
    );
  }

  export default App;
