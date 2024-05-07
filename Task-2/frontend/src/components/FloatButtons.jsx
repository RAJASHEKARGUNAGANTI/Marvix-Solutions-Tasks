const FloatButtons = () => {
    return (
      <div className=" fixed bottom-4 right-6 left-6 z-50">
        <button>
          <svg className="h-16 w-16 absolute bottom-4 p-3 z-10 text-black bg-gradient-to-r from-blue-300 to-green-300 rounded-full" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <p className="flex absolute bottom-6 left-24 bg-white p-3 rounded-full ">Chat with us 👋</p>
        <button>
          <svg className="h-16 w-16 absolute bottom-28 right-4 p-3 text-white bg-purple-900 rounded-full" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </button>
        <button>
          <svg className="h-16 w-16 absolute bottom-4 right-4 p-3 text-white bg-blue-500 rounded-full" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </button>
      </div>
    );
  }
  
  export default FloatButtons;
  