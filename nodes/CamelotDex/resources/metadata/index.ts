import type { INodeProperties } from 'n8n-workflow';

export const metadataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					]
				}
			},
			"options": [
				{
					"name": "Get Metadata",
					"value": "Get Metadata",
					"action": "Retrieve metadata from external source",
					"description": "Retrieve metadata from external source",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metadata"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					],
					"operation": [
						"Get Metadata"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of metadata",
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
						"Metadata"
					],
					"operation": [
						"Get Metadata"
					]
				}
			}
		},
];
