import React from "react";

const PermintaanMaterial = () => {
  return (
    <div className="content vh-100">
      <div className="container row mx-auto pt-3 gx-3">
        {/* Profil */}
        <div className="col-xl-6 col-sm-12 p-2">
          <div className="content-box d-flex">
            <div className="content-head d-flex justify-content-end align-items-center mb-2 fs-3 col-4">
              <img
                src="https://randomuser.me/api/portraits/men/19.jpg"
                alt="foto"
                className="photo-sm rounded-circle"
              />
            </div>
            <div className="content-body mb-2 d-flex align-items-center ms-3">
              <div>
                <div className="mb-2 fs-3 fw-bold">John Doe</div>
                <div className="mb-2">Manajemen</div>
              </div>
            </div>
          </div>
        </div>
        {/* Grafik */}
        <div className="col-xl-6 col-sm-12 p-2">
          <div className="content-box">
            <div className="content-head mb-2 fs-5">Grafik</div>
            <div className="content-body mb-2">this is content body</div>
          </div>
        </div>
        {/* Statistik */}
        <div className="col-xl-6 col-sm-12 p-2">
          <div className="content-box">
            <div className="content-head mb-2 fs-5">Statistik</div>
            <div className="content-body mb-2">this is content body</div>
          </div>
        </div>
        {/* Kategori Produk */}
        <div className="col-xl-6 col-sm-12 p-2">
          <div className="content-box">
            <div className="content-head mb-2 fs-5">Kategori Produk</div>
            <div className="content-body mb-2">this is content body</div>
          </div>
        </div>
        <div className="col-xl-6 col-sm-12 p-2" height="350px">
          <div>
            <div className="content-button">this is the content2</div>
            <div className="content-button">this is the content2</div>
          </div>
        </div>
        <div className="col-xl-6 col-sm-12 p-2">
          <div className="content-box">
            <div className="content-head mb-2 fs-5">Kategori Produk</div>
            <div className="content-body mb-2">this is content body</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermintaanMaterial;
