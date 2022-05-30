import App from "../App";
import { fireEvent, render,screen,} from "@testing-library/react";
import { Pagination } from "../Components/Pagination";



describe("Pagination Tests", function(){
  
    it("should have pagination in dom",function(){
        render(<App></App>);
        let text = screen.getByText("selected");
        expect(text).toBeInTheDocument();
    });
    it("should render based on testid", () =>{
       render(<Pagination></Pagination>);
       let button=screen.getByTestId("customButton");
       expect(button).toBeInTheDocument();
    })
     it("should change prev or next",function(){
        render(<Pagination></Pagination>);
        let h3 =screen.getByText("Prev");
        expect(h3).toHaveTextContent("prev");

        let themeButton=screen.getByText("Click me");
        fireEvent.click(themeButton);
        expect(h3).toHaveTextContent("Next");
    });

  
});