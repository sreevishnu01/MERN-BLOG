import { useState, useEffect } from 'react'
import { Form, Button, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useCategoryAction from '../../../hooks/useCategoryAction';

function SidebarCategories() {

    // coustom hook
    const [addCategorie, setAddCategorie] = useState('')
    const [categoryId, setcategoryId] = useState('')
    const { getCategory, postCategorys, deleteCategory } = useCategoryAction(addCategorie, categoryId);
    const categorys = useSelector(state => state.blog.categorys)



    useEffect(() => {
        getCategory()
        console.log('use')
    }, [])

    return (
        <>
            <Card className="card-shadow">
                <Card.Header>Categories</Card.Header>
                <Card.Body>
                    {categorys ? (
                        <Form>
                            {categorys.map((p) => (
                                <Form.Group key={p._id} controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" value={p._id}
                                        label={p.title} onChange={e => setcategoryId(e.target.value)} />
                                </Form.Group>
                            ))}
                        </Form>
                    ) : (
                        <p>NO categorys</p>
                    )}

                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <InputGroup>
                            <FormControl placeholder="New Categories" onChange={e => setAddCategorie(e.target.value)} />
                            <Button onClick={postCategorys} className="mx-1">+</Button>
                            <Button variant="danger" onClick={deleteCategory}>-</Button>
                        </InputGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </>
    )
}

export default SidebarCategories
