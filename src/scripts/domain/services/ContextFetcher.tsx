import { blogResources, productResources, request } from '@/restful';

import { BaseComponent } from '../base';

interface ContextFetcherState {
    readonly allowLoad: boolean;
}

export class ContextFetcher extends BaseComponent<{}, ContextFetcherState> {
    public static readonly defaultProps = {
        children: null
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            allowLoad: false
        };
    }

    private readonly fetchContext = async () => {
        const { setContext } = this.context;

        const [products, blogs] = await Promise.all([
            request(
                productResources.findAll,
                [
                    { type: 'query', parameter: 'published', value: true },
                    { type: 'query', parameter: '_sort', value: 'priority:desc' }
                ]
            ),
            request(
                blogResources.findAll,
                [
                    { type: 'query', parameter: 'published', value: true },
                    { type: 'query', parameter: '_sort', value: '_id:desc' }
                ]
            )
        ]);

        setContext({
            products: products,
            blogs: blogs,
            dealers: [{
                name: 'DICTRICT 1',
                address: '20 Nguyễn Huệ',
                email: 'info@mquan1.vn',
                tel: '+84 38 25 69 42',
                city: 'HCM'
            }, {
                name: 'DICTRICT 3',
                address: '112 Nguyễn Thiện Thuật',
                email: 'info@mquan3.vn',
                tel: '+84 38 25 68 92',
                city: 'HCM'
            }, {
                name: 'HOCMON',
                address: '911 Nguyễn Văn Hưởng',
                email: 'info@mhocmon.vn',
                tel: '+84 38 25 33 33',
                city: 'HCM'
            }, {
                name: 'DICTRICT 1',
                address: '20 Nguyễn Huệ',
                email: 'info@mquan1.vn',
                tel: '+84 38 25 69 42',
                city: 'DANANG'
            }, {
                name: 'DICTRICT 3',
                address: '112 Nguyễn Thiện Thuật',
                email: 'info@mquan3.vn',
                tel: '+84 38 25 68 92',
                city: 'DANANG'
            }, {
                name: 'HOCMON',
                address: '911 Nguyễn Văn Hưởng',
                email: 'info@mhocmon.vn',
                tel: '+84 38 25 33 33',
                city: 'DANANG'
            }, {
                name: 'DICTRICT 1',
                address: '20 Nguyễn Huệ',
                email: 'info@mquan1.vn',
                tel: '+84 38 25 69 42',
                city: 'HANOI'
            }, {
                name: 'DICTRICT 3',
                address: '112 Nguyễn Thiện Thuật',
                email: 'info@mquan3.vn',
                tel: '+84 38 25 68 92',
                city: 'HANOI'
            }, {
                name: 'HOCMON',
                address: '911 Nguyễn Văn Hưởng',
                email: 'info@mhocmon.vn',
                tel: '+84 38 25 33 33',
                city: 'HANOI'
            }]
        });

        this.setState({
            allowLoad: true
        });
    }

    public componentWillMount() {
        this.fetchContext();
    }

    public render() {
        if (!this.state.allowLoad) {
            return null;
        }

        return this.props.children;
    }
}