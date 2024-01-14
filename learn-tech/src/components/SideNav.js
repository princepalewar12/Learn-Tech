import React from "react";

const SideNav = () => {
  return (
    <>
      <div class="d-inline-flex ">
        <div  id="navbar-example3 " class="col-2 pe-5 ">
          <nav  className="h-70 pt-3 bg-light border-end " >
            <nav class="nav"  >
              <p className="h4  ps-3">React Tutorial</p>
              <nav class="nav nav-pills flex-start ">
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Home
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Get Started
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Upgrade
                </a>
                <a class="nav-link text-dark p-3" href="#item-1-1">
                  React JSX
                </a>
                <a class="nav-link text-dark ps-3 " href="#item-1-1">
                  React Component
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Class
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Props
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Event
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Conditional
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React List
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Forms
                </a>
                <a class="ms- nav-link text-dark ps-3" href="#item-1-1">
                  React Router
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React Memo
                </a>
                <a class="nav-link text-dark ps-3" href="#item-1-1">
                  React CSS Styling
                </a>
                <a class="nav-link text-dark ps-3 ms-" href="#item-1-1">
                  React Sass Styling
                </a>
              </nav>
            </nav>
          </nav>
        </div>

        <div className="text-start pe-2 pt-3 w-100">
          <div className="Add container p-5 border">
            <h1 className="text-center">ADVERTISEMENT</h1>
          </div>
          <h1 className="">React Tutorial</h1>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success ps-3 pe-3">❮ Home</button>
            <button className="btn btn-success ps-3 pe-3 justify-content-end">
              Next ❯
            </button>
          </div>
          <div className="content pb-2 border-bottom">
            <p style={{ backgroundColor: "#f3ecea" }} className="mt-4 w-100 p-5 ">
              
              <p>React is a JavaScript library for building user interfaces.</p>
              <p>React is used to build single-page applications.</p>
              <p>React allows us to create reusable UI components.</p>
              <button className="btn btn-success">Start learning React now ❯</button>
            </p>
          </div>
            <div className="learningByExample">
              <p className="pt-4 display-6">Learning by Examples</p>
            </div>
        </div>
        
        <nav id="navbar-example3" className="h-70  pt-3 ps-4 border flex-end">
          <h5 className="text-center w-100 pe-2 me-4 me-3 ">ADVERTISEMENT</h5>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
