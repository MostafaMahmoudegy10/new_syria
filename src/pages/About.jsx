import { FaBullseye, FaKey, FaHistory } from "react-icons/fa";

import AboutComponent from "./../components/AboutComponent";

const About = () => {
  return (
    <div className="p-10 flex justify-center items-center min-h-screen ">
      <div className="bg-[linear-gradient(to_bottom,rgba(45,70,57,1),rgba(27,29,30,1))] rounded-xl px-10 py-8 shadow-[0px_2px_10px_0px_rgba(0, 132, 75, 0.25)] w-[70%] flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <p
            className="text-5xl text-[rgba(233,200,130,1)] font-bold"
            style={{ textShadow: "0px 2px 10px rgba(233,200,130,1)" }}
          >
            من نحن
          </p>
          <div className="w-[150px] h-[4px] rounded-[4px] bg-[linear-gradient(to_right,rgba(0,132,75,1),rgba(233,200,130,1))]"></div>
          <p className="text-xl text-white">
            رحلة عبر الكون المعرفي لنقل الحقيقة بكل وضوح وشفافية
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full mt-5 ">
          {[
            {
              headline: "رؤيتنا",
              Icon: FaBullseye,
              content: `نطمح لأن نكون النجم اللامع في سماء الصحافة الرقمية، حيث نقدم المحتوى بجودة عالية ودقة متناهية،
لنكون وجهتك الأولى للأخبار الموثوقة والتحليلات العميقة`,
            },
            {
              headline: "مهمتنا",
              Icon: FaKey,
              content: `مهمتنا هي إضاءة الطريق أمام القارئ العربي بمحتوى هادف، نكسر فيه حواجز التضليل ونبني جسور
الثقة مع جمهورنا عبر الشفافية والمهنية العالية في الطرح والتحليل.`,
            },
            {
              headline: "قصتنا",
              Icon: FaHistory,
              content: ` كفكرة صغيرة بين مجموعة من الصحفيين الشباب، وتطورنا عبر السنين لنصبح منصة
إعلامية رائدة تضم فريقًا من المحترفين في مختلف التخصصات الصحفية والتقنية.`,
            },
          ].map(({ headline, Icon, content }, indx) => (
            <AboutComponent
              key={indx}
              headline={headline}
              Icon={Icon}
              content={content}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <p
            className="text-5xl text-[rgba(233,200,130,1)] font-bold"
            style={{ textShadow: "0px 2px 10px rgba(233,200,130,1)" }}
          >
            طاقمنا
          </p>
          <div className="w-[150px] h-[4px] rounded-[4px] bg-[linear-gradient(to_right,rgba(0,132,75,1),rgba(233,200,130,1))]"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          {[
            {
              headline: "رئيس تحرير",
              Icon: "public/pexels-hasanabwini-9923562.jpg",
              name:"مصطفى محمود"
            },
            {
              headline: "رئيس تحرير",
              Icon: "public/pexels-italo-melo-881954-2379004.jpg",
               name:"احمد محمود"
            },
            {
              headline: "رئيس تحرير",
              Icon: "public/pexels-rdne-8124213.jpg",
               name:"محمد محمود"
            },
          ].map(({ headline, Icon,name}, indx) => (
               <div
              key={indx}
              className="bg-[rgba(255,255,255,0.05)] rounded-md px-6 py-6 border-t-2 border-t-[rgba(0,132,75,1)] w-[30%] flex flex-col items-center gap-3"
            >
              <img
                src={Icon}
                alt={headline}
                className="w-32 h-32 border-3 border-[rgba(233,200,130,1)] rounded-[60px] object-cover"
                 style={{ textShadow: "0px 5px 15px rgba(0,0,0,0.2)" } }

              />
              <p className="font-semibold text-xl text-[rgba(233,200,130,1)] text-center">
                {name}
              </p>
               <p className=" text-[rgba(185,175,130,1)] text-center">
                {headline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
