

import App from "../App";
import {  render,screen,} from "@testing-library/react";
import { Image } from "../Components/Image";



describe("Image", function(){
  
    it.only("should have src",function(){
        render(<Image/>);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', 'https://res.cloudinary.com/practicaldev/image/fetch/s---9uj15Mg--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/690302/0f9dbf48-bfa8-4ebc-8b41-a9071516dd86.png');
       
    });
    it.only("should have alt",function(){
        render(<Image/>);
        const alt=screen.getByRole('img');
        expect(alt).toHaveAttribute('alt','images')
    })
    it.only("should have width",function(){
        render(<Image/>);
        const width=screen.getByRole('img');
        expect(width).toHaveAttribute('width','100')
    })
    it.only("should have height",function(){
        render(<Image/>);
        const height=screen.getByRole('img');
        expect(height).toHaveAttribute('height','120')
    })
    
});