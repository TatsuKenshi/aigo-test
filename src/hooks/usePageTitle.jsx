const usePageTitle = () => {
  const changeTitle = ({ language, srTitle, enTitle }) => {
    if (language === "en") {
      return (document.title = `Aigo Eat | ${enTitle}`);
    } else {
      return (document.title = `Aigo Eat | ${srTitle}`);
    }
  };
  return { changeTitle };
};

export default usePageTitle;
