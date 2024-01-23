import classNames from 'classnames';
import styles from './after-ask-info.module.scss';
import { Button, Card, Table, ListGroup } from 'react-bootstrap';

export interface AfterAskInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AfterAskInfo = ({ className }: AfterAskInfoProps) => {
    const aferaskinfo="The message has been sent successfully, return to ";
    return <div className={classNames(styles.root, className)}>
            <Card style={{ width: '60vw' }}>
                <Card.Body>
                    <Card.Title>
                        <h2>Message has been sent</h2>
                    </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                
                <Card.Body>
                    {aferaskinfo}<a href="https://zhiyouyuec.com">Home</a>
                </Card.Body>
            </Card>
        </div>;
};
