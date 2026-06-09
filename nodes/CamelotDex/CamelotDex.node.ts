import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { poolsV2Description } from './resources/pools-v2';
import { poolsV3Description } from './resources/pools-v3';
import { poolsV3TicksDescription } from './resources/pools-v3-ticks';
import { poolsV4Description } from './resources/pools-v4';
import { deprecatedPoolsV4Description } from './resources/deprecated-pools-v4';
import { deprecatedPoolsV4TicksDescription } from './resources/deprecated-pools-v4-ticks';
import { tokensDescription } from './resources/tokens';
import { vaultsDescription } from './resources/vaults';
import { campaignsDescription } from './resources/campaigns';
import { rewardsDescription } from './resources/rewards';
import { pointsDescription } from './resources/points';
import { campaignsHealthDescription } from './resources/campaigns-health';
import { metadataDescription } from './resources/metadata';
import { proofsDescription } from './resources/proofs';
import { chainsDescription } from './resources/chains';
import { healthDescription } from './resources/health';
import { mainTokenDescription } from './resources/main-token';
import { mainTokenSupplyDescription } from './resources/main-token-supply';
import { xTokenDescription } from './resources/x-token';
import { analyticsDescription } from './resources/analytics';
import { analytics24HDescription } from './resources/analytics-24-h';
import { oTokenDescription } from './resources/o-token';
import { salesDescription } from './resources/sales';
import { defaultDescription } from './resources/default';

export class CamelotDex implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Camelot Dex',
		name: 'N8nDevCamelotDex',
		icon: { light: 'file:./camelot-dex.svg', dark: 'file:./camelot-dex.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Camelot DEX: Arbitrum DEX with concentrated liquidity and custom yield strategies.',
		defaults: { name: 'Camelot Dex' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevCamelotDexApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Pools v2",
					"value": "Pools v2",
					"description": ""
				},
				{
					"name": "Pools v3",
					"value": "Pools v3",
					"description": ""
				},
				{
					"name": "Pools v3 Ticks",
					"value": "Pools v3 Ticks",
					"description": ""
				},
				{
					"name": "Pools v4",
					"value": "Pools v4",
					"description": ""
				},
				{
					"name": "Deprecated Pools v4",
					"value": "Deprecated Pools v4",
					"description": ""
				},
				{
					"name": "Deprecated Pools v4 Ticks",
					"value": "Deprecated Pools v4 Ticks",
					"description": ""
				},
				{
					"name": "Tokens",
					"value": "Tokens",
					"description": ""
				},
				{
					"name": "Vaults",
					"value": "Vaults",
					"description": ""
				},
				{
					"name": "Campaigns",
					"value": "Campaigns",
					"description": ""
				},
				{
					"name": "Rewards",
					"value": "Rewards",
					"description": ""
				},
				{
					"name": "Points",
					"value": "Points",
					"description": ""
				},
				{
					"name": "Campaigns Health",
					"value": "Campaigns Health",
					"description": ""
				},
				{
					"name": "Metadata",
					"value": "Metadata",
					"description": ""
				},
				{
					"name": "Proofs",
					"value": "Proofs",
					"description": ""
				},
				{
					"name": "Chains",
					"value": "Chains",
					"description": ""
				},
				{
					"name": "Health",
					"value": "Health",
					"description": ""
				},
				{
					"name": "Main Token",
					"value": "Main Token",
					"description": ""
				},
				{
					"name": "Main Token Supply",
					"value": "Main Token Supply",
					"description": ""
				},
				{
					"name": "X Token",
					"value": "X Token",
					"description": ""
				},
				{
					"name": "Analytics",
					"value": "Analytics",
					"description": ""
				},
				{
					"name": "Analytics 24 H",
					"value": "Analytics 24 H",
					"description": ""
				},
				{
					"name": "O Token",
					"value": "O Token",
					"description": ""
				},
				{
					"name": "Sales",
					"value": "Sales",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...poolsV2Description,
		...poolsV3Description,
		...poolsV3TicksDescription,
		...poolsV4Description,
		...deprecatedPoolsV4Description,
		...deprecatedPoolsV4TicksDescription,
		...tokensDescription,
		...vaultsDescription,
		...campaignsDescription,
		...rewardsDescription,
		...pointsDescription,
		...campaignsHealthDescription,
		...metadataDescription,
		...proofsDescription,
		...chainsDescription,
		...healthDescription,
		...mainTokenDescription,
		...mainTokenSupplyDescription,
		...xTokenDescription,
		...analyticsDescription,
		...analytics24HDescription,
		...oTokenDescription,
		...salesDescription,
		...defaultDescription
		],
	};
}
