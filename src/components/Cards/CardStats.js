import React from "react";
import { Icon } from "@iconify/react";
import "./CardStats.css";

function CardStats(props) {
    return (
        <>
            <div className="card-stats-container">
                <div className="card-stats-container-detail">
                    <div className="card-stats-top">
                        <div className="card-stats-top-title">
                            <h5>{props.statsTitle}</h5>
                            <span>{props.statsNumber}</span>
                        </div>
                        <div
                            className={
                                `card-stats-top-icon ` + props.statsColor
                            }
                        >
                            <Icon icon={props.statsIcon} />
                        </div>
                    </div>
                    <div className="card-stats-bottom">
                        <div className={props.statsPercentColor}>
                            <Icon
                                icon={
                                    props.statsArrow === "up"
                                        ? "material-symbols:arrow-upward-rounded"
                                        : props.statsArrow === "down"
                                        ? "material-symbols:arrow-downward-rounded"
                                        : ""
                                }
                            />
                            <span>{props.statsPercent}%</span>
                            <span className="card-stats-description">
                                {props.statsDescription}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardStats;
