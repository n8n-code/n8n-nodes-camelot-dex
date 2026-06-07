import type { INodeProperties } from 'n8n-workflow';

export const proofsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Proofs"
					]
				}
			},
			"options": [
				{
					"name": "Get Proofs",
					"value": "Get Proofs",
					"action": "Retrieve proofs by type",
					"description": "Retrieve proofs by type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/proofs/{{$parameter[\"type\"]}}/{{$parameter[\"name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /proofs/{type}/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proofs"
					],
					"operation": [
						"Get Proofs"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Proof type (e.g., discounts, whitelists, airdrops)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proofs"
					],
					"operation": [
						"Get Proofs"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "Proof identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proofs"
					],
					"operation": [
						"Get Proofs"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"description": "Wallet address to get proof for",
			"default": "",
			"type": "string",
			"required": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Proofs"
					],
					"operation": [
						"Get Proofs"
					]
				}
			}
		},
];
