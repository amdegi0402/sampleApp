/*
import {
    Button,
    Card,
    Form,
    FormLayout,
    Stack,
    TextField,
    Layout, 
    Page,
} from '@dhopify/polaris';

class AnnotatedLayout extends React.Component{
    state = {
        discount: '10%',
    };

    render(){
        const {discount} = this.state;

        return(
            <Page>
                <Layout>
                    <Layout.AnnotatedLayout
                        title="Default discount"
                        description="Add a product to Sample App, it will automatically be discounted."
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        value={discount}
                                        onChange={this.handleChange('discount')}
                                        label="Discount percentage"
                                        tyoe="discount"
                                    />
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedLayout>
                </Layout>
            </Page>
        );
    }

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount,
        });
        console.log('submisshon', this.state);
    };

    handleChange = (field) => {
        return(value) => this.setState({[field]: value});
    };
}
export default AnnotatedLayout;
*/