const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("The lists should be modified accordingly", function() {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head');
    let title = head.querySelector('title').innerHTML;
    
    expect(title).toBe('03 List styling')
  })

  // Test in progress:
  // it("The lists should be correctly styled", function() {
  //   const uls = document.querySelectorAll("ul");
  //   const ols = document.querySelectorAll("ol");
  //   console.log(uls);
  //   console.log(ols);

  //   var style1 = window.getComputedStyle(ols[0]);
  //   var style2 = window.getComputedStyle(uls[0]);
  //   var style3 = window.getComputedStyle(ols[1]);
  //   var style4 = window.getComputedStyle(uls[1]);
    
    
  //   expect(style1["listStyleType"]).toBe("lower-alpha");
  //   expect(style2["listStyleType"]).toBe("square");
  //   expect(style3["listStyleType"]).toBe("armenian");
  //   expect(style4["listStyleType"]).toBe("none");

  // });
});
