import { WBTable } from "./table.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { WBCaption } from "../caption/caption.tsx";
import { WBTr } from "../tr/tr.tsx";
import { WBTh } from "../th/th.tsx";
import { WBTbody } from "../tbody/tbody.tsx";
import { WBThead } from "../thead/thead.tsx";
import { WBTd } from "../td/td.tsx";
import { WBTfoot } from "../tfoot/tfoot.tsx";
import { WBP } from "../../../content/text/p/p.tsx";
import { WBStrong } from "../../../content/text/strong/strong.tsx";

const meta = {
	title: "容器/表格/Table",
	component: WBTable,
	tags: ["autodocs"],
	argTypes: {
		children: {
			table: {
				type: {
					summary: "ReactNode",
				},
			},
		},
		tableLayout: {
			description: "配置表格的尺寸",
			table: {
				defaultValue: {
					summary: "fixed",
				},
			},
		},
		border: {
			description: "是否启用边框样式",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		borderCollapse: {
			description: "是否合并表格边框与单元格边框",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
	},
} satisfies Meta<typeof WBTable>;

type Story = StoryObj<typeof WBTable>;
const children = (
	<>
		<colgroup>
			<col />
			<col />
			<col className="w-1/2" />
		</colgroup>

		<WBCaption>表格标题</WBCaption>

		<WBThead>
			<WBTr backgroundColor>
				<WBTh border="all">
					<WBP align="center">
						<WBStrong>分类1</WBStrong>
					</WBP>
				</WBTh>

				<WBTh border="all" colSpan={2}>
					<WBP align="center">
						<WBStrong>分类2</WBStrong>
					</WBP>
				</WBTh>
			</WBTr>

			<WBTr backgroundColor>
				<WBTh border="all">
					<WBP align="center">
						<WBStrong>表头</WBStrong>
					</WBP>
				</WBTh>
				<WBTh border="all">
					<WBP align="center">
						<WBStrong>表头</WBStrong>
					</WBP>
				</WBTh>
				<WBTh border="all">
					<WBP align="center">
						<WBStrong>表头</WBStrong>
					</WBP>
				</WBTh>
			</WBTr>
		</WBThead>

		<WBTbody>
			<WBTr>
				<WBTd border="all">
					<WBP align="center">1</WBP>
				</WBTd>
				<WBTd border="all">
					<WBP align="center">2</WBP>
				</WBTd>
				<WBTd border="all">
					<WBP align="center">3</WBP>
				</WBTd>
			</WBTr>

			<WBTr backgroundColor>
				<WBTd border="all">
					<WBP align="center">4</WBP>
				</WBTd>
				<WBTd border="all">
					<WBP align="center">5</WBP>
				</WBTd>
				<WBTd border="all">
					<WBP align="center">6</WBP>
				</WBTd>
			</WBTr>
		</WBTbody>

		<WBTfoot>
			<WBTr>
				<WBTd border="all">
					<WBP align="center">
						<WBStrong>总计:</WBStrong>
					</WBP>
				</WBTd>
				<WBTd colSpan={2} border="all">
					<WBP align="center">
						<WBStrong>$300</WBStrong>
					</WBP>
				</WBTd>
			</WBTr>
		</WBTfoot>
	</>
);

export const Table: Story = {
	args: {
		children: children,
		tableLayout: "fixed",
		border: true,
		borderCollapse: true,
	},
};

export default meta;
