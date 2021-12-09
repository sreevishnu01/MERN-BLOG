import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Editor from './Editor'
function BlogNewpost() {


    return (
        <div>
            <Row className="mt-5">
                <Col md={9}>
                    <Editor />
                </Col>
                <Col>
                </Col>
            </Row>

        </div>
    )
}

export default BlogNewpost
