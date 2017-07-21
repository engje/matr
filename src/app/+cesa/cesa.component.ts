import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Cesa` component loaded asynchronously');

@Component({
  selector: 'cesa',
  template: `
    <div class="text-center quaternary-nav hidden-xs">
        <div class="container">
            <div class="p-t-b-15 bdr-btm-e0e0e0 position-relative">
                <ul class="list-inline nav-group nav-list">
                    <li>
                        <a class="text-center product-icon zoomtab" pageScroll href="#anchorcreditedge">
                            <span class="icon elasticsearch-6"></span> CreditEdge
                        </a>
                    </li>
                    <li>
                        <a class="text-center product-icon zoomtab" [routerLink]="['./']" fragment="sav">
                            <span class="icon elasticsearch-4"></span> SAV
                        </a>
                    </li>
                    <li>
                        <a class="text-center product-icon zoomtab" [routerLink]="['./']" fragment="cv2">
                            <span class="icon elasticsearch-6"></span> CreditView 2
                        </a>
                    </li>
                </ul>
                <div class="product-btn-group position-absolute">
                </div>
            </div>
        </div>
    </div>

    <div class="main-container">
        <section id="content">
            <div class="content-wrapper">
                <div class="product-wrapper gray-bg m-t-minus50">
                    <div class="try-banner">
                        <div class="container">
                            <h2>Content, Economics & Structured Analytics Division</h2>
                            <div class="intro-paragraph">
                                <p>
                                    Reliable delivery of our top in class economic research and valuations to serve the evolving finance industry
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="container m-t-20">
                        <div class="product-stack">
                            <div id="anchorcreditedge" class="gray-white-block m-t-b-60">
                                <div class="white-block col">
                                    <div class="block-inside">
                                        <p> A Powerful Approach to Measuring Credit Risk.</p>
                                        <h2 class="small-header">CreditEdge</h2>
                                        <div class="hidden-sm hidden-md hidden-lg m-t-20">
                                            <p>
                                                CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.
                                            </p>
                                        </div>
                                        <div class="button-wrap m-t-20">
                                            <a [href]="creditEdgeUrl" class="btn  btn-primary m-r-20  m-b-15">Learn More</a>
                                            <a [href]="creditEdgePdf" class="btn  btn-secondary  m-b-15">Download Brochure</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="circle-bg product-icon get-description-block">
                                    <figure>
                                        <img [src]="cloudIcon" class="img-responsive kibana-img" alt="Kibana" />
                                    </figure>
                                </div>

                                <div class="gray-block col hidden-xs">
                                    <div class="block-inside">
                                        <p>
                                            CreditEdge gives users the ability to leverage the industry’s most accurate PD model through cutting-edge analytics. Users can now access our innovative model through fast and reliable platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="sav" class="gray-white-block m-t-b-60  elasticsearch">
                                <div class="white-block col">
                                    <div class="block-inside">
                                        <p>Structured Analytics &amp; Valuation.</p>
                                        <h2 class="small-header">SAV</h2>
                                        <div class="hidden-sm hidden-md hidden-lg m-t-20">
                                            <p>
                                                Solutions allow users to monitor, price and stress all structured assets including agency and non-agency RMBS, ABS, CMBS and CDO's. Data is available at the loan and pool level and includes historical performance metrics.
                                            </p>
                                        </div>
                                        <div class="button-wrap m-t-20">
                                            <a [href]="savUrl" class="btn  btn-primary m-r-20  m-b-15">Learn More</a>
                                            <a [href]="savPdf" class="btn  btn-secondary  m-b-15">Download Brochure</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="circle-bg product-icon get-description-block">
                                    <figure>
                                        <img [src]="logstashIcon" class="img-responsive kibana-img" alt="Kibana" />
                                    </figure>
                                </div>

                                <div class="gray-block col hidden-xs">
                                    <div class="block-inside">
                                        <p>
                                            Solutions allow users to monitor, price and stress all structured assets including agency and non-agency RMBS, ABS, CMBS and CDO's. Data is available at the loan and pool level and includes historical performance metrics.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h6 class="small‐title text-center ingest-data hidden-sm hidden-md hidden-lg">Ingest any data, from any source, in any format.</h6>
                            <div id="cv2" class="gray-white-block m-t-b-60 block-level">
                                <h6 class="small‐title text-center m-t-35 hidden-xs">Credit View 2</h6>
                                <div class="clearfix beats-logstash">
                                    <div class="white-block beats col hidden-xs">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4 col-md-4 text-center">
                                                <div class="circle-bg">
                                                    <figure>
                                                        <img [src]="cloudIcon" class="img-responsive beats-img" alt="Beats">
                                                    </figure>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-8 col-md-8 m-t-20">
                                                <h2 class="small-header">CapitalStructure</h2>
                                                <div class="m-t-20">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                    </p>
                                                </div>
                                                <div class="button-wrap m-t-20">
                                                    <a [routerLink]="['./child-cesa']" class="btn btn-primary m-r-20  m-b-15 btn-sm">Participants' Experiences</a>
                                                    <a [href]="capitalStructureUrl" class="btn btn-primary m-r-20  m-b-15 btn-sm">Check It Out!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="gray-block col logstash">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-8 col-md-8 m-t-20">
                                                <h2 class="small-header">Issuer View</h2>
                                                <div class="m-t-20">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet lacinia purus. Nulla facilisi. Aliquam id semper quam.
                                                    </p>
                                                </div>
                                                <div class="button-wrap m-t-20">
                                                    <a [href]="issuerSummaryUrl" class="btn btn-primary m-r-20  m-b-15 btn-sm">Check It Out!</a>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-4 col-md-4 text-center hidden-xs">
                                                <div class="circle-bg">
                                                    <figure>
                                                        <img [src]="logstashIcon" class="img-responsive" alt="Logstash">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="circle-bg product-icon hidden-sm hidden-md hidden-lg">
                                        <figure>
                                            <img [src]="logstashIcon" class="img-responsive" alt="Logstash">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class CesaComponent implements OnInit {
  public creditEdgePdf = '../../assets/pdf/CreditEdgeBrochure-Oct2016.pdf';
  public creditEdgeUrl = 'http://www.creditedge.com';
  public savPdf = 'assets/pdf/StructuredAnalyticsValuationBrochure.pdf';
  public savUrl = 'http://www.moodysanalytics.com/Products-and-Solutions/Structured-Analytics-and-Valuation';
  public capitalStructureUrl = 'http://ci2.moodys.com:8080/issuer/820489619/capitalstructure/debtmaturity';
  public issuerSummaryUrl = 'http://ci2.moodys.com:8080/credit-ratings/Tullow-Oil-plc-credit-rating-820489619';

  public stackIcon = '../../assets/img/svg/icon-elastic-stack-bb.svg';
  public logstashIcon = '../../assets/img/svg/icon-logstash-bb.svg';
  public cloudIcon = '../../assets/img/svg/icon-cloud-bb.svg';

  public ngOnInit() {
    console.log('hello `Cesa` component');
  }

}
