import type { INodeProperties } from 'n8n-workflow';

export const vaultsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vaults"
					]
				}
			},
			"options": [
				{
					"name": "Get Vaults",
					"value": "Get Vaults",
					"action": "Retrieve vaults data",
					"description": "Retrieve vaults data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/vaults"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /vaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vaults"
					],
					"operation": [
						"Get Vaults"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of vaults data",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vaults"
					],
					"operation": [
						"Get Vaults"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"description": "Vault address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vaults"
					],
					"operation": [
						"Get Vaults"
					]
				}
			}
		},
];
