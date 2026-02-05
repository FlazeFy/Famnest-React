import Swal from "sweetalert2"

type AsyncFn = () => Promise<any>

export const runWithDelayQueue = async (delay: number, fns: AsyncFn[]) => {
    Swal.fire({
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })

    try {
        for (const fn of fns) {
            await new Promise(res => setTimeout(res, delay))
            await fn()
        }
    } catch (err) {
        console.error(err)
    } finally {
        Swal.close()
    }
}
