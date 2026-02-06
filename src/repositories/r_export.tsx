import apiCall from "@/configs/axios"

export const getExportDataset = async (context: string) => {
    const res = await apiCall.get(`/api/v1/${context}/export`, {
        responseType: "blob",
    })
    
    return res.data
}
