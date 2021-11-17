/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const prod = "http://abm.intermediatech.link";
const local = "http://192.168.1.87:8000";
const baseUrl = prod;
export default {
  userLogin: baseUrl + "/api/react/login",
  userSignup: baseUrl + "/api/react/signup",
  logActivity: baseUrl + "/api/react/list/log",
  // Tahun Ajaran
  listTahunAjaran: baseUrl + "/api/react/list/tahun_ajaran",
  createTahunAjaran: baseUrl + "/api/react/create/tahun_ajaran",
  detailTahunAjaran: baseUrl + "/api/react/detail/tahun_ajaran",
  updateTahunAjaran: baseUrl + "/api/react/update/tahun_ajaran",
  deleteTahunAjaran: baseUrl + "/api/react/delete/tahun_ajaran",
  asyncTahunAjaran: baseUrl + "/api/react/async/tahun_ajaran",
  asyncOcasTahunAjaran: baseUrl + "/api/react/async_ocas/tahun_ajaran",
  // Semester
  listSemester: baseUrl + "/api/react/list/semester",
  createSemester: baseUrl + "/api/react/create/semester",
  detailSemester: baseUrl + "/api/react/detail/semester",
  updateSemester: baseUrl + "/api/react/update/semester",
  deleteSemester: baseUrl + "/api/react/delete/semester",
  asyncSemester: baseUrl + "/api/react/async/semester",
  asyncOcasSemester: baseUrl + "/api/react/async_ocas/semester",
  // Prodi
  listProdi: baseUrl + "/api/react/list/prodi",
  createProdi: baseUrl + "/api/react/create/prodi",
  detailProdi: baseUrl + "/api/react/detail/prodi",
  updateProdi: baseUrl + "/api/react/update/prodi",
  deleteProdi: baseUrl + "/api/react/delete/prodi",
  asyncProdi: baseUrl + "/api/react/async/prodi",
  asyncOcasProdi: baseUrl + "/api/react/async_ocas/prodi",
  // Jurusan
  listJurusan: baseUrl + "/api/react/list/jurusan",
  createJurusan: baseUrl + "/api/react/create/jurusan",
  detailJurusan: baseUrl + "/api/react/detail/jurusan",
  updateJurusan: baseUrl + "/api/react/update/jurusan",
  deleteJurusan: baseUrl + "/api/react/delete/jurusan",
  asyncJurusan: baseUrl + "/api/react/async/jurusan",
  asyncOcasJurusan: baseUrl + "/api/react/async_ocas/jurusan",
  // Kelas
  listKelas: baseUrl + "/api/react/list/kelas",
  createKelas: baseUrl + "/api/react/create/kelas",
  detailKelas: baseUrl + "/api/react/detail/kelas",
  updateKelas: baseUrl + "/api/react/update/kelas",
  deleteKelas: baseUrl + "/api/react/delete/kelas",
  asyncKelas: baseUrl + "/api/react/async/kelas",
  asyncOcasKelas: baseUrl + "/api/react/async_ocas/kelas",
  // Group
  listGroup: baseUrl + "/api/react/list/group",
  createGroup: baseUrl + "/api/react/create/group",
  detailGroup: baseUrl + "/api/react/detail/group",
  updateGroup: baseUrl + "/api/react/update/group",
  deleteGroup: baseUrl + "/api/react/delete/group",
  asyncGroup: baseUrl + "/api/react/async/group",
  asyncOcasGroup: baseUrl + "/api/react/async_ocas/group",
  // Mahasiswa
  listMahasiswa: baseUrl + "/api/react/list/mahasiswa",
  createMahasiswa: baseUrl + "/api/react/create/mahasiswa",
  detailMahasiswa: baseUrl + "/api/react/detail/mahasiswa",
  updateMahasiswa: baseUrl + "/api/react/update/mahasiswa",
  deleteMahasiswa: baseUrl + "/api/react/delete/mahasiswa",
  asyncMahasiswa: baseUrl + "/api/react/async/mahasiswa",
  asyncOcasMahasiswa: baseUrl + "/api/react/async_ocas/mahasiswa",
  // Pengajar
  listPengajar: baseUrl + "/api/react/list/pengajar",
  createPengajar: baseUrl + "/api/react/create/pengajar",
  detailPengajar: baseUrl + "/api/react/detail/pengajar",
  updatePengajar: baseUrl + "/api/react/update/pengajar",
  deletePengajar: baseUrl + "/api/react/delete/pengajar",
  asyncPengajar: baseUrl + "/api/react/async/pengajar",
  asyncOcasPengajar: baseUrl + "/api/react/async_ocas/pengajar",
};
