const handleContactFormSubmit = async (e, setMessageIsSent, setIsError) => {
  e.preventDefault();
  setIsError(false);
  const formData = e.target;

  const sendFormUrl = formData.action;
  const method = formData.method;
  const body = new FormData(formData);
  try {
    const response = await fetch(sendFormUrl, {
      method,
      body,
    });
    if (response.ok) {
      setMessageIsSent(true);
      formData.reset();
    } else {
      setMessageIsSent(false);
    }
  } catch (error) {
    setIsError(true);
    console.log(error);
  }
};

export default handleContactFormSubmit;
