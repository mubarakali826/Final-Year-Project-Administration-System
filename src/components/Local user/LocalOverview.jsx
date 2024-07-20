import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import img from "../../assets/images/ss1.png";
import img2 from "../../assets/images/ss2.png";
import img3 from "../../assets/images/ss3.png";
import img4 from "../../assets/images/ss4.png";
const LocalOverview = () => {
  return (
    <div className="local-overview-container flex h-screen w-screen bg-white">
      <div className="beyond w-[50%] h-full relative">
        <div className="project-details w-full absolute top-[4rem] left-[4rem]">
          <div className="display-image-container h-[50%] bg-red-300"  style={{ backgroundImage: `url(${img})`,backgroundPosition:"center" ,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          </div>
          <div className="tabs p-4">
            <Tabs defaultValue="account" className="w-[90%] m-auto">
              <TabsList>
                <TabsTrigger value="overview">Project Overview</TabsTrigger>
                <TabsTrigger value="reviews">Supervisor Reviews</TabsTrigger>
                <TabsTrigger value="technology">Technology Stack</TabsTrigger>
                <TabsTrigger value="files">Project Files</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">my project does XYZ</TabsContent>
              <TabsContent value="reviews">
                my group was so hard working
              </TabsContent>
              <TabsContent value="technology">we used XYZ tech</TabsContent>
              <TabsContent value="files">These are some files</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="images-container w-[35%] ml-[4.3rem] flex flex-col gap-2 p-3">
        <div className="image-1 overflow-hidden w-[100%] flex-1 bg-red-600">
          <img src={img2} alt="" style={{ backgroundImage: `url(${img})`,backgroundPosition:"center",backgroundSize:"cover"}} />
        </div>
        <div className="two-images-container flex-1 flex gap-3">
          <div className="image-2 flex-1 bg-blue-600">
          <img src={img3} alt="" style={{ backgroundImage: `url(${img})`,backgroundPosition:"center",backgroundSize:"cover"}} />

          </div>
          <div className="image-2 flex-1 bg-gray-500">
          <img src={img4} alt="" style={{ backgroundImage: `url(${img})`,backgroundPosition:"center",backgroundSize:"cover"}} />
          </div>
        </div>
        <div className="image-1 flex-1 bg-red-600 overflow-hidden">
        <img src={img3} alt="" style={{ backgroundImage: `url(${img})`}} />

        </div>
      </div>
    </div>
  );
};

export default LocalOverview;
