import {
    blogResources,
    dealerResources,
    pageResources,
    productResources,
    request,
    settingResources,
    socialResources
} from '@/restful';

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

        const [products, blogs, dealers, pages, settings, socials] = await Promise.all([
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
            ),
            request(
                dealerResources.findAll,
                [
                    { type: 'query', parameter: '_sort', value: '_id:desc' }
                ]
            ),
            request(pageResources.findAll),
            request(settingResources.findAll),
            request(socialResources.findAll)
        ]);

        setContext({
            products,
            blogs,
            dealers,
            pages,
            settings,
            socials
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