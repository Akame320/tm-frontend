import axios from "axios";

const ENV_SERVER_API = 'http://localhost:9999'

export default new class authApi {
    constructor() {
    }

    async registration(payload) {
        axios.post(ENV_SERVER_API + '/auth/registration', JSON.stringify(payload), {
            header: { 'Content-Type': 'text/plain; charset=utf-8' }
        }).then(res => {
            return res
        }).catch(err => {
            return err
        })
    }

    async checkUserEmail(payload) {
        return axios.post(ENV_SERVER_API + '/auth/busy-email', JSON.stringify(payload), { header: { 'Content-Type': 'text/plain; charset=utf-8' } })
    }
}

