import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Editor from './Editor'
import SidebarCategories from './SidebarCategories'
function BlogNewpost() {


    return (
        <div>
            <Row className="mt-5">
                <Col md={9}>
                    <Editor />
                </Col>
                <Col>
                    <SidebarCategories />
                </Col>
            </Row>

        </div>
    )
}

export default BlogNewpost
