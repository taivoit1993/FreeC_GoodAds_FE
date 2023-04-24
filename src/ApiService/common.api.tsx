export const responseApi = async(response: any) => {
    if (response?.status === 200 || response?.status === 204 || response?.status === 201) {
        return response.data;
    }
    throw new Error("Error")
}

export const downloadFile = async(response: any) => {
    if (response?.status === 200 || response?.status === 204 || response?.status === 201) {
        const [, filename] =
        response?.headers["content-disposition"]?.split("filename=") || "";
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); //or any other extension
        document.body.appendChild(link);
        link.click();
    }
    throw new Error("Error")
}