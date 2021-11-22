import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import MaterialRequestTable from "../../../Data/MaterialRequestTable";

const PermintaanMaterial = () => {
  return (
    <div className="marginBody">
      <h1>Material</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3>Permintaan</h3>
          <div style={{ marginTop: "5%" }}>
            <MaterialRequestTable>
              <div className="d-flex justify-content-center">
                <Button
                  as="input"
                  type="submit"
                  value="Kirim"
                  className="button-submit-prosuksi"
                />
              </div>
            </MaterialRequestTable>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PermintaanMaterial;
