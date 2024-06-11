import { useRouter } from "next/router";
import { useEffect } from "react";

const SectionPage = () => {
  const router = useRouter();
  const { sectionName } = router.query;

  useEffect(() => {
    if (sectionName) {
      // You can use the sectionName to fetch data or render content dynamically
      console.log(`Navigated to section: ${sectionName}`);
    }
  }, [sectionName]);

  return (
    <div>
      {/* Render section content here */}
      <h1>{sectionName}</h1>
    </div>
  );
};

export default SectionPage;
