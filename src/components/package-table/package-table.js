import styles from './package-table.module.css'
export const PackageTable = (props) => {

    {/* Using json data to build the table automatically */}
    
    const packages = {
        monthly: {
            price:{
                basic:'$20',
                business:'$30',
                enterprise:'$50'
            },
            options: [{
                name:'Unlimited Transactions',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Multi Outlet',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Report Featured',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Inventory Management',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Direct report & teamreview',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Emplovee Management System',
                basic:false,
                business:true,
                enterprise:true,
            },
            {
                name:'CRM And Promotion Features',
                basic:false,
                business:false,
                enterprise:true,
            },
            {
                name:'Third Party Application Integration',
                basic:false,
                business:false,
                enterprise:true,
            }]
        },
        annually: {
            price:{
                basic:'$200',
                business:'$300',
                enterprise:'$500'
            },
            options: [{
                name:'Unlimited Transactions',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Multi Outlet',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Report Featured',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Inventory Management',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'Direct report & teamreview',
                basic:true,
                business:false,
                enterprise:true,
            },
            {
                name:'Emplovee Management System',
                basic:true,
                business:true,
                enterprise:true,
            },
            {
                name:'CRM And Promotion Features',
                basic:false,
                business:false,
                enterprise:true,
            },
            {
                name:'Third Party Application Integration',
                basic:true,
                business:true,
                enterprise:true,
            }]
        }
    }
    return(
        <div>
            {/* Monthly Plan */}
            <div className={`${styles['package-table']} ${styles['table-monthly']} ${(props.duration=='monthly')?styles['show']:''}`}>
                {/*table header*/}
                <div className={`${styles['table-cell']} ${styles['cell-label']} ${styles['first-row']}`}>
                
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['first-row']} ${styles['cell-green']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Basic
                    </div>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['first-row']} ${styles['cell-blue']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Business
                    </div>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-violet']} ${styles['first-row']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Enterprise
                    </div>
                </div>
        
                {/*table price header*/}
                <div className={`${styles['table-cell']} ${styles['cell-label']}`}>
                    Price
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-green']}`}>
                    <span className={styles['price']}>{packages.monthly.price.basic}<span className={styles['duration']}>/month</span></span>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-blue']}`}>
                    <span className={styles['price']}>{packages.monthly.price.business}<span className={styles['duration']}>/month</span></span>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-violet']}`}>
                    <span className={styles['price']}>{packages.monthly.price.enterprise}<span className={styles['duration']}>/month</span></span>
                </div>
                
                {/*table body*/}
                {packages.monthly.options.map((option, index) => ([
                    <div key={`label_${index}`} className={`${styles['table-cell']} ${styles['cell-label']} ${(index==packages.monthly.options.length-1)?styles['last-row']:''}`}>{option.name}</div>,
                    <div key={`basic_${index}`} className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-green']} ${(index==packages.monthly.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.basic ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.8333" cy="12.0078" r="9" fill="#38715B" stroke="#38715B" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                        
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>,
                    <div key={`business_${index}`} className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-blue']} ${(index==packages.monthly.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.business ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.0078" r="9" fill="#3871A5" stroke="#3871A5" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.5 11.8078L11.5 14.5078L16.5 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                                                
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>,
                    <div key={`enterprise_${index}`} className={`${styles['table-cell']} ${styles['cell-violet']} ${(index==packages.monthly.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.enterprise ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.1666" cy="12.0078" r="9" fill="#7256AF" stroke="#7256AF" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.16663 11.8078L11.1666 14.5078L16.1666 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                                                                      
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>
                ]))}
            </div>

            {/* Annual Plan */}
            <div className={`${styles['package-table']} ${styles['table-annually']} ${(props.duration=='yearly')?styles['show']:''}`}>
                {/*table header*/}
                <div className={`${styles['table-cell']} ${styles['cell-label']} ${styles['first-row']}`}>
                
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['first-row']} ${styles['cell-green']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Basic
                    </div>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['first-row']} ${styles['cell-blue']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Business
                    </div>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-violet']} ${styles['first-row']}`}>
                    <div className={styles['plan-name-wrap']}>
                        Enterprise
                    </div>
                </div>
        
                {/*table price header*/}
                <div className={`${styles['table-cell']} ${styles['cell-label']}`}>
                    Price
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-green']}`}>
                    <span className={styles['price']}>{packages.annually.price.basic}<span className={styles['duration']}>/year</span></span>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-blue']}`}>
                    <span className={styles['price']}>{packages.annually.price.business}<span className={styles['duration']}>/year</span></span>
                </div>
                <div className={`${styles['table-cell']} ${styles['cell-violet']}`}>
                    <span className={styles['price']}>{packages.annually.price.enterprise}<span className={styles['duration']}>/year</span></span>
                </div>
                
                {/*table body*/}
                {packages.annually.options.map((option, index) => ([
                    <div key={`label_${index}`} className={`${styles['table-cell']} ${styles['cell-label']} ${(index==packages.annually.options.length-1)?styles['last-row']:''}`}>{option.name}</div>,
                    <div key={`basic_${index}`} className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-green']} ${(index==packages.annually.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.basic ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.8333" cy="12.0078" r="9" fill="#38715B" stroke="#38715B" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                        
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>,
                    <div key={`business_${index}`} className={`${styles['table-cell']} ${styles['cell-spaced']} ${styles['cell-blue']} ${(index==packages.annually.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.business ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.0078" r="9" fill="#3871A5" stroke="#3871A5" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.5 11.8078L11.5 14.5078L16.5 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                                                
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>,
                    <div key={`enterprise_${index}`} className={`${styles['table-cell']} ${styles['cell-violet']} ${(index==packages.annually.options.length-1)?styles['last-row']:''}`}>
                        <span className={styles['mobile-table-label']}>{option.name}</span>
                        {option.enterprise ? (
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.1666" cy="12.0078" r="9" fill="#7256AF" stroke="#7256AF" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M8.16663 11.8078L11.1666 14.5078L16.1666 9.50781" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                                                                      
                        ) : (
                        <span className={styles['invalid-item']} key={`span_${index}`}>
                            {<div>-</div>}
                        </span>
                        )}
                    </div>
                ]))}
            </div>
        </div>
    )
};