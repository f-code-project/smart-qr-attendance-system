const useTitle = (title: string) => {
  document.title = `${title} - ${import.meta.env.VITE_NAME_PROJECT}`;
  return null;
};

export default useTitle;
