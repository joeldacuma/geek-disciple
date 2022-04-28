export const handleSubmit = (func: any, data: any) => {
    const id = Object.keys(data)[0];
    const value = data[Object.keys(data)[0]];
    func((prevState: any) => ({...prevState, [id]: value}));
  };