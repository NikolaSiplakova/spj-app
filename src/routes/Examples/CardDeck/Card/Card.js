import React from "react"
import classes from "./Card.module.scss"
import PropTypes from "prop-types"
import { useIntl } from "react-intl"
import Button from "common/Button/Button"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"
import { ReactComponent as StepByStepIcon } from "styles/icons/steps.svg"

const Card =  ({orderNum, example}) => {
    const intl = useIntl();
    return (
    <div className={classes["example-card"]}>
        <div className={classes["example-card-sidebar"]}>
            #{orderNum}
            <div className={classes["example-card-sidebar-buttons"]}>
                <Button
                    primary
                    isExtended
                    icon={<VisualizationIcon className={classes["icon"]} />}
                />
                <Button
                    primary
                    isExtended
                    icon={<StepByStepIcon className={classes["icon"]} />}
                />
            </div>
        </div>
        <div className={classes["example-card-body"]}>
            <div className={classes["example-card-body-content"]}>
                {example.equation}
            </div>
            <div className={classes["example-card-body-footer"]}>
                {example.equationType}
            </div>
        </div>
    </div>
    )
    }

Card.propTypes = {
    orderNum: PropTypes.number.isRequired,
    example: PropTypes.object.isRequired,
}

export default Card
