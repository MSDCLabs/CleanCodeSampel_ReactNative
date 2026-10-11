import axios from 'axios';
export function getErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
            return 'Permintaan terlalu lama. Silakan coba lagi.';
        }
        if (error.response) {
            return `Server mengembalikan status ${error.response.status}.`;
        }
        if (error.request) {
            return 'Tidak dapat terhubung ke server. Periksa koneksi internet.';
        }
    }
    return 'Terjadi kesalahan yang tidak terduga.';
}
