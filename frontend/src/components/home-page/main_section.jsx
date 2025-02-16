import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './main_section.module.css';

import bgImg1 from '../../assets/refined.webp';
import bgImg2 from '../../assets/oil-refined.webp';
import bgImg3 from '../../assets/garam-masale.webp';
import bgImg4 from '../../assets/tea.webp';
import bgImg5 from '../../assets/floor.webp';
import bgImg6 from '../../assets/pulse.webp';
import bgImg7 from '../../assets/surf.webp';
import bgImg8 from '../../assets/other-kirana.webp';



const MainSection = () => {




    return(
        <>

{/* section 1 */}
            <div className={styles["container"]}>
                
                <div className={styles["main-header-section"]}>
                </div>

                <div className={styles["shop-section"]}>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Refined Oil & Ghee</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><Link to={"/main_kirana/Oil"}>see more</Link></p>
                        </div>
                    </div>

                    {/* box 2 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Cooking Oil</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg2})`}}></div>
                            <p><Link to={"/main_kirana/Tel"}>see more</Link></p>
                        </div>
                    </div>

                    {/* box 3 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Garam Masala</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg3})`}}></div>
                            <p><Link to={"/main_kirana/Masala"}>see more</Link></p>
                        </div>
                    </div>

                    {/* box 4 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Tea</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg4})`}}></div>
                            <p><Link to={"/main_kirana/Tea"}>see more</Link></p>
                        </div>
                    </div>
                </div>
            </div>



{/* section 2 */}
            <div className={styles["container"]}>
                <div className={styles["shop-section-2"]}>

                    <div className={styles["heading-sec-2"]}>
                        <h2>Mostly used Kirana items</h2>
                    </div>

                    <div className={styles["box-section"]}>
                        {/* box 1 */}
                            <div className={`${styles.box1} ${styles["box"]}`}>
                                <div className={styles["box-content"]}>
                                    <p className={styles["shop-section-content"]}>Flour (Atta)</p>
                                    <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg5})`}}></div>
                                    <p><Link to={"/main_kirana/Floor"}>see more</Link></p>
                                </div>
                            </div>

                            {/* box 2 */}
                            <div className={`${styles.box1} ${styles["box"]}`}>
                                <div className={styles["box-content"]}>
                                    <p className={styles["shop-section-content"]}>Pulses & Rice</p>
                                    <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg6})`}}></div>
                                    <p><Link to={"/main_kirana/Pulses"}>see more</Link></p>
                                </div>
                            </div>

                            {/* box 3 */}
                            <div className={`${styles.box1} ${styles["box"]}`}>
                                <div className={styles["box-content"]}>
                                    <p className={styles["shop-section-content"]}>Laundry Detergent (Surf) & Soap</p>
                                    <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg7})`}}></div>
                                    <p><Link to={"/main_kirana/Surf"}>see more</Link></p>
                                </div>
                            </div>

                            {/* box 4 */}
                            <div className={`${styles.box1} ${styles["box"]}`}>
                                <div className={styles["box-content"]}>
                                    <p className={styles["shop-section-content"]}>Other Kirana</p>
                                    <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg8})`}}></div>
                                    <p><Link to={"/main_kirana/Other_Kirana"}>see more</Link></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainSection;