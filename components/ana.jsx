import React from 'react';

const Ana = () => {
  return (
    <div className='container' dir='rtl'>
      <div className='row mt-4'>
        <div className='col-lg-8  p-3'>
            <div className='row '>
              <div className='col-lg-1 d-flex flex-column'>
                <div className='triangleOrange'></div>
                <div className='triangleGreen'></div>
                <div className='mt-auto mb-4'>
                  <img  src="/15.jpg" alt="" />
                </div>
              </div>
              <div className='col-lg-11 '>
                <div className='image1 '>
                  <img className='image11' src="/11.jpg" alt="" width={400} />
                </div>
                <div className='card'>
                  <div className='row'>
                    <div className='col-8'>
                      <h5 className='text-center mt-4 text-white'>محاضرة العلوم التحشيشة </h5>
                      <p className='text-white me-2'>صف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاض المحاضرةصفالمحاضرةصفرةصف المحاضرةصف المحاضرة</p>
                      <div className='d-flex justify-content-between me-5 '>
                        <span className='badge text-white'> العنوان </span>
                        <span className='badge1 text-white'> التاريخ </span>
                        <span className='badge2 text-white'> الموقع </span>
                      </div>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                      <div className='circleGreen'></div>
                    </div>
                  </div>
                </div>
                <div className='mt-2 d-flex'>
                  <img src='/button.jpg' alt='' width={40} height={40}/>
                  <button className='button1 text-start p-1'>
                    <span className='ms-2 buttonText'>اشترك في هذا الحدث</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='row '>
            <div className='col-lg-1 d-flex flex-column align-items-center justify-content-center'>
                    <div className='me-4 mt-3'> <img className='' src='/17.jpg' height={160}/> </div>
            </div>

              <div className='col-lg-11'>
                <div className='image-1'>
                  <img className='' src="/11.jpg" alt=""/>
                </div>
                <div className='cardGreen'>
                  <div className='row'>
                    <div className='col-8'>
                      <h5 className='text-center mt-4 text-white'>محاضرة العلوم التحشيشة </h5>
                      <p className='text-white me-2'>صف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاضرةصف المحاض المحاضرةصفالمحاضرةصفرةصف المحاضرةصف المحاضرة</p>
                      <div className='d-flex justify-content-between me-5 '>
                        <span className='badge text-white'> العنوان </span>
                        <span className='badge1 text-white'> التاريخ </span>
                        <span className='badge2 text-white'> الموقع </span>
                      </div>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                      <div className='circleGreen'></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <div className='col-lg-4'>
          <div className='col d-flex justify-content-center'>
            <div className='daire '></div>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='card1 d-flex align-items-center justify-content-center'>
              <div className='texts '>
                <h5 className='text-white'>محمد محمد </h5>
                <h5 className='text-white'>Busines Adminoster </h5>
                <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2h2v2H2z"/>
                  <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                  <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                  <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
                  <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
                </svg>
                <p className='mt-2'>PIN-123454</p>
                <h5 className='text-white text-start'> Email: <span>hamodeejafgxgfl.com</span> </h5>
                <h5 className='text-white text-start'> Phone: <span>5050394462</span> </h5> 
                <h5 className='text-white text-start mb-5'> University: <span>Nisantasi</span> </h5>
              </div>
            </div>
          </div>
          <div className='col mt-1 d-flex justify-content-center'>
            <img className='abb' src="/people.png"   />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ana;
