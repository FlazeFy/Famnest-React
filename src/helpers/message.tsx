import Swal from "sweetalert2"

export const consumeErrorAPI = (err: any) => {
    Swal.fire({
        icon: "error",
        title: "I'm sorry",
        text: err?.response?.data?.message ?? "Something went wrong",
    })
}

export const loadingDialog = (context: string) => {
    Swal.fire({
        title: `${context}...`,
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}
