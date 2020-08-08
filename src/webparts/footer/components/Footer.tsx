import * as React from "react";
import styles from "./Footer.module.scss";
import { IFooterProps } from "./IFooterProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Footer extends React.Component<IFooterProps, {}> {
  public render(): React.ReactElement<IFooterProps> {
    return (
      <div className={styles.section_footer}>
        <div className={styles.section_footer__footer1}>
          <ul>
            <li>
              <div className={styles.footer1_brand}>
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_corporativo_h_2_g.png"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className={styles.footer__links}>
                <ul>
                  <li>
                    <a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/home.aspx">INICIO</a>
                  </li>
                  <li>
                    <a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/normativa-colsubsidio.aspx">NORMATIVA COLSUBSIDIO</a>
                  </li>
                  <li>
                    <a href="http://colsubsidiovirtual/Compromisos-Reuniones/Paginas/VIP.aspx">GESTIÓN DE COMPROMISOS</a>
                  </li>
                  <li>
                    <a href="https://colsubsidio365.sharepoint.com/sites/gestiondocumentalcorporativo">GESTIÓN DOCUMENTAL</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.footer__links}>
                <ul>
                  <li>
                    <a href="http://windtiintrane01/isolucion/">ISOLUCIÓN</a>
                  </li>
                  <li>
                    <a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/Contact.aspx">CONTÁCTANOS</a>
                  </li>
                  <li>
                    <a href="http://colsubsidiovirtual/OficinaJuridica_SecretariaGeneral/default.aspx">GESTIÓN CONTRACTUAL</a>
                  </li>
                  <li>
                    <a href="https://flpnwc-temu5vjrkc.dispatcher.us3.hana.ondemand.com/sites/offline#Shell-home">DISPENSACIÓN OFFLINE MEDICAMENTOS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.footer__intranet}>
                <h3>Intranet: </h3>
                <a href="https://colsubsidio365.sharepoint.com/sites/ColsubsidioIntranetSalud/SitePages/Home.aspx">
                  <img
                    src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/ico_salud_a.png"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li>
              <div className={styles.footer__poweredby}>
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/SiteAssets/by_rem.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.section_footer__footer2}>
          <img
            src="http://aremlab.com/media/colsubsidio/institucional/footer/footer_cubes.png"
            alt=""
          />
        </div>
        <div className={styles.section_footer__footer3}>
          <ul>
            <li>
              <a href="https://www.fecolsubsidio.com/">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-2-g.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.proteccion.com/wps/portal/proteccion">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-3-g.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="http://www.famisanar.com.co/">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-4-g.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.bancompartir.co/">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-5-g.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.simple.co/Web/">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-6-g.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="http://www.nuevaeps.com.co/">
                <img
                  src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-7-g.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section_footer__footer4}>
          <a href="https://www.colsubsidio.com/">
            <img
              src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_corporativo_h_w_n.png"
              alt=""
            />
          </a>
          <a href="#">TERMINOS Y CONDICIONES</a>
          <a href="#">POLÍTICAS DE PROTECCIÓN DE DATOS. </a>
          <a href="http://www.ssf.gov.co/wps/portal/ES/Inicio">
            <img
              src="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_supersubsidio_w.png"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}
