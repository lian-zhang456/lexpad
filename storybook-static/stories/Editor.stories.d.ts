import { Meta, StoryObj } from '@storybook/react';
import { default as Editor } from '../Editor';
declare const meta: Meta<typeof Editor>;
export default meta;
type Story = StoryObj<typeof Editor>;
export declare const Default: Story;
export declare const CustomPlaceholder: Story;
export declare const WithOnChange: Story;
export declare const WithStyling: Story;
