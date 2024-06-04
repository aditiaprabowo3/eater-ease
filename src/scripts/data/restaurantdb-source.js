/* eslint-disable no-trailing-spaces */
import API_ENDPOINT from '../globals/api-endpoint.js';

class RestaurantDbSource {
    // static menunjukkan bahwa metode ini adalah metode statis yang terkait dengan kelasnya, bukan dengan instance objek, dapat dipanggil langsung dari kelasnya tanpa harus membuat objeknya terlebih dahulu.
    static async restaurantList() {
        // mengambil data dari URL API
        const response = await fetch(API_ENDPOINT.RESTO_LIST);
        const responseJson = await response.json();


        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        try {
            // mengambil data dari URL API
            // await untuk menunggu respons dari permintaan tersebut sebelum melanjutkan eksekusi kode berikutnya
            const response = await fetch(API_ENDPOINT.DETAIL(id));

            // mengambil data JSON dari respons HTTP. Ini mengubah respons HTTP menjadi bentuk JSON yang dapat digunakan dalam kode JavaScript.
            // await sebelum response.json(), kita menunggu konversi respons HTTP menjadi JSON sebelum melanjutkan. Hasilnya adalah responseJson, yang berisi data JSON dari respons.
            const responseJson = await response.json();

            //  Setelah mendapatkan data JSON dari respons, kita mengembalikan array restaurants yang merupakan bagian dari data JSON tersebut. Array restaurants kemudian dapat digunakan atau ditampilkan dalam aplikasi sesuai kebutuhan.
            return responseJson.restaurant;
        } catch (error) {
            return (error.message);
        }
    }

    static async postReviewRestaurant(data) {
        // mengambil data dari URL API
        // eslint-disable-next-line no-trailing-spaces
        // panggilan fetch yang mengirimkan permintaan HTTP ke URL 
        // : Dengan menambahkan await sebelum fetch, kita menunggu respons dari permintaan POST sebelum melanjutkan eksekusi kode berikutnya. 
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',

            // headers digunakan untuk menentukan jenis konten yang dikirim dalam permintaan. Dalam hal ini, kita menyatakan bahwa konten yang dikirim adalah JSON dengan tipe konten application/json
            headers: {
                'Content-Type': 'application/json',
            },

            // body digunakan untuk menentukan data yang akan dikirimkan dalam permintaan POST. JSON.stringify(data) digunakan untuk mengubah objek JavaScript data menjadi string JSON sebelum dikirimkan
            body: JSON.stringify(data),
        });

        //  Setelah mendapatkan data JSON dari respons, kita mengembalikan array restaurants yang merupakan bagian dari data JSON tersebut. Array restaurants kemudian dapat digunakan atau ditampilkan dalam aplikasi sesuai kebutuhan.
        return response.json();
    }
}

export default RestaurantDbSource;